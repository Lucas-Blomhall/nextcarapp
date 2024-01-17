import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

// Här är crud för specifik ID. Du kan inte skapa med specifikt ID.

// Get är för at kunna hämta data
export const GET = async (req: Request) => {
  try {
    //Vi försöker med att få den att fungera
    const id = req.url.split("carfolder/")[1]; // vi splittar och tar första elementet som blir id:n
    console.log(id);
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "ERROR", post }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (err) {
    //När
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { title, desc } = await req.json(); //Här så hämtar vi json datan som användaren skickar in.
    const id = req.url.split("carfolder/")[1]; //Här hämtar vi första elementet från url:en och sparar det till id:n
    console.log("PUT by id"); //Här skriver vi ut id:n
    updatePost(id, title, desc);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  console.log("Delete by id");
  try {
    const id = req.url.split("carfolder/")[1];
    deletePost(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};
