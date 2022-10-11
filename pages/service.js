import React from "react";
import HomeLayout from "../layouts/HomeLayout";

export default function service() {
  return (
    <div>

    </div>
  )}
service.getLayout = (page) => <HomeLayout children={page} />;