// import type { NextRequest } from 'next/server'

export const runtime = 'edge'       // Executa na Edge Function da Vercel
export const dynamic = 'force-dynamic' // Garante execução sempre‑server

const EC2_BASE_URL = process.env.EC2_API_URL ?? 'http://<EC2_PUBLIC_IP>:<PORT>'

export async function GET() {
    try {
        const ec2Response = await fetch(`${EC2_BASE_URL}/all_records`, {
            cache: 'no-store',
            next: { revalidate: 0 },
        })

        if (!ec2Response.ok) {
            return new Response(
                JSON.stringify({ error: 'EC2 responded with ' + ec2Response.status }),
                { status: ec2Response.status }
            )
        }

        // Fluxo de dados sem tocar em disco
        const data = await ec2Response.arrayBuffer()
        return new Response(data, {
            status: 200,
            headers: {
                'Content-Type': ec2Response.headers.get('Content-Type') ?? 'application/json',
                // Encaminhe outros cabeçalhos que façam sentido
            },
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err.message ?? 'Unknown error' }),
            { status: 500 }
        )
    }
}
