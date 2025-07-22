import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const systemPrompt = `
أنت مساعد متخصص في تقديم معلومات حول السياحة في منطقة توسكانا بإيطاليا فقط. 
أجب فقط عن الأسئلة المتعلقة بالسفر، المعالم، الفنادق، الطعام، النقل، المواسم السياحية، الأنشطة الترفيهية في توسكانا. 
إذا تم سؤالك عن أي موضوع خارج توسكانا، فاعتذر وقل أنني متخصص فقط في السياحة في توسكانا.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Invalid message format." }), { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ response: reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
