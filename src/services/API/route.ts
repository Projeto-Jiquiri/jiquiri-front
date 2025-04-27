import type { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function handler(req: NextRequest) {
    try {
        const ec2ApiUrl = process.env.EC2_API_URL;
        if (!ec2ApiUrl) {
            return new Response('EC2_API_URL não configurada.', { status: 500 });
        }

        const response = await fetch(`${ec2ApiUrl}/api/records`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return new Response('Erro ao buscar dados do servidor.', { status: 502 });
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erro na API proxy:', error);
        return new Response('Erro interno do servidor.', { status: 500 });
    }
}
