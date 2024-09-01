import type { NextApiRequest, NextApiResponse } from 'next'
import { Ok, Result } from '@/utils/result';
import { z } from "zod";


type SendEmailRequestData = {
  name: string,
  email: string,
  company?: string,
  message: string
}

type ResponseData = {
  message: string
}

type ResponseError = {
  error: any
}

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(5),
  company: z.string().optional(),
  message: z.string().min(1),
});

async function sendEmailToMe(request: SendEmailRequestData): Promise<void> {
  console.log('Email send from');
  console.log('---------');
  console.log(request.message);

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  if (req.method === 'POST') {
    const request = contactSchema.safeParse(req.body);

    if (request.success) {
      try {
        await sendEmailToMe(request.data);
        return res.status(200).json({ message: "Message processed" });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Unable to send email" });
      }

    } else {
      return res.status(503).json({ error: request.error.flatten().fieldErrors });
    }
  }

  return res.status(404).json({ error: 'Page not found' });
}
