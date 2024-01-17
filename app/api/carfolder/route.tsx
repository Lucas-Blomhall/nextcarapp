import { addPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  console.log("Get request, We try to get from the api");
  try {
    const posts = getPosts();
    return NextResponse.json({ message: "OK", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, desc } = await req.json();
  //Här hämtar vi från postman värden och lagrar den i json. Vi awaitar med async await.
  console.log("POST request, We try to post to the api");

  try {
    const post = { title, desc, date: new Date(), id: Date.now().toString() };
    addPost(post);
    return NextResponse.json({ message: "Response", post }, { status: 201 }); // 201 betyder created
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
