"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/utils/AuthStorage';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if(token === null){
      router.push("/");
    }
  }, []);

  return (
    <div>Dashboard</div>
  );
};

export default Dashboard;