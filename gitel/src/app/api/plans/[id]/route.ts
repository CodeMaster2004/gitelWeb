import { prisma } from "@/lib/prisma";

//OBTENER UNO
export async function GET(
    { params }: { params: { id: string}}
){
    const data = await prisma.plans.findUnique({
        where: { plan_id: Number(params.id) }
    })
    return Response.json(data);
}

//ACTUALIZAR
export async function PUT(
    req: Request,
    { params }: { params: {id: string}}
){
    const body = await req.json();

    const updated = await prisma.plans.update({
        where: { plan_id: Number(params.id)},
        data: body,
    });

    return Response.json(updated);
}

//ELIMINAR
export async function DELETE(
    { params }: { params: { id: string } }
) {
   await prisma.plans.delete({
        where: { plan_id: Number(params.id) },
    });

    return Response.json({ message: "Plan eliminado" });
}