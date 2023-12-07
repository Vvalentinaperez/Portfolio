// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//     } catch (error) {
//       console.log("Error al enviar el correo:", error);
//       res.status(500).json({ error: "Error interno del servidor" });
//     }
//   } else {
//     res.status(405).json({ error: "Metodo no permitido" });
//   }
// }

// // import { EmailTemplate } from "../../../components/EmailTemplate";
// import { Resend } from "resend";
// import { Response } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail, //A quien va a enviar el email
//       to: ["valentinaperez23072001@gmail.com"], //Email de soporte
//       subject: "Hello world",
//       react: (
//         <>
//           <p> Email Body</p>
//         </>
//       ),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
