import { NextResponse } from 'next/server';
import { stripe } from '../../../lib/stripe';
export async function POST(req: Request){
  const body = await req.json().catch(()=> ({}));
  const session = await stripe.checkout.sessions.create({ line_items: body.items || [] });
  return NextResponse.json({ url: 'https://example.com/checkout/' + session.id });
}
