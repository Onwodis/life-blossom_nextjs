import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "../../lib/db";
import User from "../../models/User";


export async function POST(req) {
 
  try {
    const { email, pwrd } = await req.json();
    console.log(email, pwrd)
    await connectDB();

    if (!email || !pwrd) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    // const hpwrd = await bcrypt.hash("obiajulu",10)
    // await User.create({
    //   name:"Samuel Onwodi",
    //   username:"Samuel Onwodi",

    //   email: "samuelonwodi@yahoo.com",
    //    admin:true,
    //   pwrd:"obiajulu",
    //   password:hpwrd,
    //   hpwrd,
 
    //   phone:"08130757003",
    //   userid:"fdfbtht5454"
    //  })
     
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(pwrd, user.hpwrd);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = jwt.sign({ userid: user.userid }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    return NextResponse.json({
      message: "Login successful",
      token,
      user: {...user,name:user.name,pwrd:"",hpwrd:"" ,admin:user.admin},
    });
  } catch (error) {

    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
