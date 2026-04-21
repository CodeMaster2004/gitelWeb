import { prisma } from "@/lib/prisma";

export async function GET() {
    const data = await prisma.promotions.findMany();
    return Response.json(data);
}

//CREAR
export async function POST(req: Request){
    const body = await req.json();

    const newPromotion = await prisma. promotions.create({
        data: {
            title: body.title,
            description: body.description,
            image: body.image,
            start_date: new Date(body.start_date),
            end_date: new Date(body.end_date),
            activo: body.activo ?? true,

        }
    });
    return Response.json(newPromotion);
}