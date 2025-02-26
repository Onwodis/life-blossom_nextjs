import { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";
import Lding from "../common/Loading"
import Header from "./Header"
import { useAppContext } from "../home/myContext";


export default function Dashboard() {
  const { api,profile,setData ,user,setUser} = useAppContext();
  useEffect(()=>{

    setData((prev)=>({patient:true}))
  },[])

  const [stats, setStats] = useState({
    totalPatients: 0,
    totalNurses: 0,
    expiredCards: 0,
    malePatients: 0,
    femalePatients: 0,
    maleNurses: 0,
    femaleNurses: 0,
    appointments: 0,
    bedAvailability: 0,
  });

  // useEffect(() => {
  //   async function fetchStats() {
  //     try {
  //       const response = await axios.get("/api/hospital-stats");
  //       setStats(response.data);
  //     } catch (error) {
  //       console.error("Error fetching hospital stats:", error);
  //     }
  //   }
  //   fetchStats();
  // }, []);

  const genderData = [
    { name: "Patients", Male: stats.malePatients, Female: stats.femalePatients },
    { name: "Nurses", Male: stats.maleNurses, Female: stats.femaleNurses },
    { name: "Doctors", Male: stats.maledoctors, Female: stats.femaledoctors },
  ];

  return (
    <div>
    
    {user && user.name ?
      <div>
        {/* <Header /> */}
      <div className="p-lg-6  p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Card className="shadow-xl bg-primary text-light p-2 p-lg-4 col-12 col-lg-12 min-h-50 py-lg-5" >
          <div>
            <p className="text-3xl font-semibold text-center">{stats.totalPatients}</p>

            <h2 className="text-xl font-bold  text-center">Patients</h2>
          </div>
        </Card>

        <Card className="shadow-xl bg-warning  p-2 p-lg-4 col-12 col-lg-12 min-h-50 py-lg-5">
          <div>
            <p className="text-3xl font-semibold text-center">{stats.totalNurses}</p>

            <h2 className="text-xl font-bold  text-center">Nurses</h2>
          </div>
        </Card>

        <Card className="shadow-xl bg-danger text-light p-2 p-lg-4 col-12 col-lg-12 min-h-50 py-lg-5">
          <div>
            <p className="text-3xl font-semibold text-center">{stats.expiredCards}</p>

            <h2 className="text-xl font-bold  text-center">Expired Cards</h2>
          </div>
        </Card>
        <Card className="shadow-xl bg-success text-light p-2 p-lg-4 col-12 col-lg-12 min-h-50 py-lg-5">
          <div>
            
            <p className="text-3xl font-semibold text-center">{user.lastseen}</p>

            <h2 className="text-xl font-bold  text-center">Last seen</h2>
            <p className="text-3xl font-semibold text-center">{user.lastlogin}</p>

            <h2 className="text-xl font-bold  text-center">Last Login</h2>
          </div>
        </Card>

        <Card className="col-span-2 d-none d-lg-block shadow-xl p-2 p-lg-4 col-12 col-lg-12 min-h-50 py-lg-5">
          <div>
            <h2 className="text-xl font-bold mb-4">Gender Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={genderData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Male" fill="#3498db" />
                <Bar dataKey="Female" fill="#e74c3c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      </div>:
      <Lding />
    }

    </div>
  );
}
