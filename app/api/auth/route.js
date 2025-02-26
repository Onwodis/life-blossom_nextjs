import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "../../lib/db";
import User from "../../models/User";


export async function POST(req) {
  function getserialnum(bh) {
    var oboi = Math.random() + 1;
    var num = Math.floor(oboi * bh);
    return num;
  }
  try {
    const { email, pwrd } = await req.json();
    console.log(email, pwrd)
    await connectDB();

    if (!email || !pwrd) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    
     
    let user = await User.findOne({ email }).lean()
    // user = user ? user.toObject() :null
    

    
    if (user && user.name){
      console.log(user.name ,user.email +" is user" )
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
          user: {...user,name:user.name,pwrd:"",hpwrd:"" ,password:"",admin:user.admin},
      });
    }
    else{
      const cd = await User.countDocuments({admin:true})
      if(cd < 1){
        const hpwrda = await bcrypt.hash(process.env.sadminpwrd,10)
        const hpwrdb = await bcrypt.hash(process.env.adminpwrd,10)
        await User.create({
          name:process.env.sadminname,

          email:process.env.sadminemail,
          sadmin:true,
          admin:true,
          pwrd:process.env.sadminpwrd,
          password:hpwrda,
          hpwrd:hpwrda,
    
          phone:process.env.sadminphone,
          userid:"sadm"+getserialnum(10000)
        })
        await User.create({
          name:process.env.adminname,

          email:process.env.adminemail,
          admin:true,
          pwrd:process.env.adminpwrd,
          password:hpwrda,
          hpwrd:hpwrdb,
    
          phone:process.env.adminphone,
          userid:"adm"+getserialnum(10000)

        })
      }
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    
  } catch (error) {

    console.error("Login Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
