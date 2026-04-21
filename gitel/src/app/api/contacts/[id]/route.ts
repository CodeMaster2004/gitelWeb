import {prisma} from "@/lib/prisma";

// OBTENER UNO
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const data = await prisma.contacts.findUnique({
    where: { contact_id: Number(params.id) },
  });

  return Response.json(data);
}



// ACTUALIZAR
export async function PUT(
  req: Request,
  context:  { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const body = await req.json();

  const updated = await prisma.contacts.update({
    where: { contact_id: Number(params.id) },
    data: body,
  });

  return Response.json(updated);
}

// ELIMINAR
export async function DELETE(
  req: Request,
  context:  { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  await prisma.contacts.delete({
    where: { contact_id: Number(params.id) },
  });

  return Response.json({ message: "Eliminado" });
}