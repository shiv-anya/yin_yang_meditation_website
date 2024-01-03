import LessonPage from "@/app/components/lessons/LessonPage";
import SideBar from "@/app/components/lessons/SideBar";
import { redirect } from "next/navigation";

const Page = () => {
  redirect("/diet/lessons/weight-management-and-wellness");
};

export default Page;
