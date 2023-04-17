import React from "react";
import WorkItem from "./WorkItem";

export default function Work() {
  const data = [
    {
      year: 2020,
      title: "Writer",
      duration: "2 years",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat neque labore odit recusandae omnis porro, sequi quas sit assumenda fugiat facere ipsum dolores provident quisquam enim suscipit voluptas voluptatem nesciunt.",
    },
    {
      year: 2020,
      title: "Asssitant director",
      duration: "1 year",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat neque labore odit recusandae omnis porro, sequi quas sit assumenda fugiat facere ipsum dolores provident quisquam enim suscipit voluptas voluptatem nesciunt.    ",
    },
    {
      year: 2020,
      title: "Agriculturist",
      duration: "1 year",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat neque labore odit recusandae omnis porro, sequi quas sit assumenda fugiat facere ipsum dolores provident quisquam enim suscipit voluptas voluptatem nesciunt. ",
    },
    {
      year: 2020,
      title: "Web developer",
      duration: "1 year",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat neque labore odit recusandae omnis porro, sequi quas sit assumenda fugiat facere ipsum dolores provident quisquam enim suscipit voluptas voluptatem nesciunt.    ",
    },
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <div className="text-center font-bold text-4xl text-slate-900">Work</div>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}
