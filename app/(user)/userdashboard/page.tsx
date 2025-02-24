import React from 'react'
import Link from "next/link"

const Page = () => {
  return (
    <div>
      <Link href="/dashboard" className="btn btn-primary">
        User about
      </Link>
    </div>
  );
}

export default Page
