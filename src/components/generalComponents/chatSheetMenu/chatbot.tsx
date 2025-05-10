'use client';

import { useState, KeyboardEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";

const FormSchema = z.object({
    chat: z
        .string()
        .min(1, { message: "A mensagem não pode estar vazia." })
        .max(160, { message: "Sua mensagem tem muitos caracteres." }),
});

const SUGGESTIONS = [
    "Temperatura amanhã às 06?",
    "Previsão fim de semana",
    "Tempo agora em Jiquiri",
    "Mínima esta semana"
];

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Olá! Sou seu assistente do projeto Jiquiri. Como posso ajudar? 🤩🌱", sender: "bot" },
    ]);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            chat: "",
        },
    });

    async function fetchBotResponse(question: string) {
        try {
            setLoading(true);
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.projetojiquiri.cloud';
            const response = await fetch(`${apiUrl}/chatbot_ask?question=${encodeURIComponent(question)}`);

            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }

            const data = await response.json();
            return data.answer;
        } catch (error) {
            console.error("Erro ao chamar a API:", error);
            return "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente mais tarde.";
        } finally {
            setLoading(false);
        }
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (!data.chat.trim()) return;

        const userMessage = { text: data.chat, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        const botAnswer = await fetchBotResponse(data.chat);
        setMessages((prev) => [...prev, { text: botAnswer, sender: "bot" }]);

        form.reset();
    }

    function handleSuggestionClick(suggestion: string) {
        const fullQuestions: Record<string, string> = {
            "Temperatura amanhã às 06?": "Qual será a temperatura amanhã às 06?",
            "Previsão fim de semana": "Qual a previsão do tempo para o fim de semana?",
            "Tempo agora em Jiquiri": "Como está o tempo agora em Jiquiri?",
            "Mínima esta semana": "Qual a temperatura mínima prevista para esta semana?"
        };

        form.setValue('chat', fullQuestions[suggestion] || suggestion);
        const textarea = document.querySelector('textarea');
        if (textarea) textarea.focus();
    }

    function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.handleSubmit(onSubmit)();
        }
    }

    return (
        <div className="w-full mx-auto p-4 flex flex-col h-screen pb-20">
            <Card className="flex flex-col flex-grow">
                <CardContent className="flex-grow p-4 overflow-hidden">
                    <ScrollArea className="h-[55vh] space-y-2 overflow-y-auto flex flex-col">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 my-2 rounded-xl max-w-[80%] text-sm md:text-base w-fit whitespace-pre-line ${msg.sender === "user"
                                    ? "bg-blue-500 text-white self-end ml-auto"
                                    : "bg-gray-200 text-gray-800 self-start mr-auto"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex space-x-2 self-start mr-auto">
                                <Skeleton className="w-12 h-4 rounded-md" />
                                <Skeleton className="w-16 h-4 rounded-md" />
                                <Skeleton className="w-14 h-4 rounded-md" />
                            </div>
                        )}
                    </ScrollArea>
                </CardContent>
                <div className="p-4 border-t flex flex-col space-y-2">
                    {/* Sugestões rápidas em carrossel horizontal */}
                    <div className="flex overflow-x-auto pb-2 gap-2 scroll-smooth">
                        {SUGGESTIONS.map((suggestion, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="rounded-full bg-Gray_Jiquiri text-xs whitespace-nowrap py-1 px-3 h-auto flex-shrink-0"
                                onClick={() => handleSuggestionClick(suggestion)}
                                disabled={loading}
                            >
                                {suggestion}
                            </Button>
                        ))}
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                            <FormField
                                control={form.control}
                                name="chat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Pergunte sobre o tempo..."
                                                className="resize-none h-20"
                                                {...field}
                                                disabled={loading}
                                                onKeyDown={handleKeyDown}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="w-full text-sm flex justify-center items-center py-2"
                                type="submit"
                                disabled={loading || !form.watch("chat")?.trim()}
                            >
                                Enviar <SendHorizonal className="size-4 ml-2" />
                            </Button>
                        </form>
                    </Form>
                </div>
            </Card>
        </div>
    );
}