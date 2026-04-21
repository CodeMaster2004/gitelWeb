import { prisma } from "@/lib/prisma";

// LISTAR
export async function GET() {
    const data = await prisma.plans.findMany();
    return Response.json(data);
}

// CREAR
export async function POST(req: Request){
    const body = await req.json();

    const newPlan = await prisma.plans.create({
        data: {
            name: body.name,
            speed: body.speed,
            price: parseFloat(body.price),
            description: body.description,
            activo: body.activo,
        }
    })
    return Response.json(newPlan);
}
  
