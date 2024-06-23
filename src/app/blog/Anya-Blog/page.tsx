import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog2() {
  return (
    <main className="container" style={{backgroundImage: 'url("https://cdn.dribbble.com/users/2156796/screenshots/19992280/media/7d2ee3a4d15d1f335419059066067694.gif")', minHeight: '100vh', maxWidth: 'none', padding: '24px'}}>
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Profile
          </Link>
        </div>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
          มารู้จักน้อง “อาเนีย” (Anya) จากอนิเมะสุดฮิตเรื่อง Spy x Family!
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg nj nk c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="https://img1.picmix.com/output/pic/normal/9/1/7/1/10571719_75ed7.gif"
          />
        </div>
        <div>
          <blockquote className="border-l-4 pl-4 my-4">
            <p className="text-lg font-medium leading-relaxed">
            คอการ์ตูนหลายๆ คนน่าจะรู้จักตัวละครสุดน่ารักน่าเอ็นดูที่ชื่อว่าน้อง “อาเนีย” จากแอนิเมชั่น Spy x Family ที่กำลังจะเข้าฉายพาร์ท 2 ในเดือนตุลาคมนี้ ใครที่กำลังสนใจเราขอมาเล่าเรื่องย่อคร่าวๆ ของอนิเมะเรื่องนี้กันก่อน
            </p>
            <cite className="text-sm font-light block mt-2">
            เรื่องราวเริ่มต้นที่ ลอยด์ ฟอร์เจอร์ พระเอกของเรื่อง สายลับสุดเก่งที่ใครๆ ก็ต่างตามหาตัว เขาได้รับภารกิจให้เข้าใกล้บุคคลสำคัญคนหนึ่ง โดยจำเป็นต้องส่งเด็กเข้าไปในโรงเรียนเพื่อให้เขาเข้าหาเป้าหมายได้ง่ายขึ้น 
            เขาจึงต้องสร้างครอบครัวปลอมๆ ขึ้นมาเพื่อให้ภารกิจสำเร็จลุล่วง
            </cite>
          </blockquote>
        </div>
      </div>
    </main>
  );
}
