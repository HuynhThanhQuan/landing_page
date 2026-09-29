import { PublicHome } from "@/components/PublicHome";
export const metadata = {alternates:{canonical:"/"}};

export default function Home() {
  return (
    <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Curious Machine",url:"https://curiousmachine.152-42-201-32.sslip.io/",founder:{"@type":"Person",name:"Huỳnh Thanh Quan"},email:"hthquan28@gmail.com",knowsAbout:["Data Science","Machine Learning","Causal Inference"]})}}/><PublicHome /></>
  );
}
