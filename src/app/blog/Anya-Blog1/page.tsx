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
          เหตุผลที่ทำไมฮิตมาก! Spy x Family เมื่อสายลับเด็กอ่านใจคนได้ สาวนักฆ่า และหมาที่รู้อนาคต กลายมาเป็นครอบครัวเดียวกัน
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
            src="https://img1.picmix.com/output/pic/normal/9/7/5/4/10544579_3d47e.gif"
          />
        </div>
        <div>
          <blockquote className="border-l-4 pl-4 my-4">
            <p className="text-lg font-medium leading-relaxed">
            Spy x Family เป็นแอนิเมชันที่กำลังฮิตมากตอนนี้ สังเกตได้จากเทศกาลฮัลโลวีนที่ผ่านมาที่ประเทศญี่ปุ่นมีการแต่งตัวตามแอนิเมชันเรื่องนี้กันจำนวนไม่น้อย และเอาเข้าจริงๆ Spy x Family ก็ฮิตไปค่อนโลกแล้ว ผ่านพรมแดนภาษาและซับไตเติลไปครองใจคนดูทุกเพศทุกวัย ไม่เว้นแม้แต่เด็กหรือผู้ใหญ่
            </p>
            <cite className="text-sm font-light block mt-2">
        บทความนี้เราจะลองวิเคราะห์ความสำเร็จของ Spy x Family กันดู ว่าทำไมแอนิเมชันเรื่องหนึ่งถึงสนุกและอยู่ในแทบทุกแพลตฟอร์มสตรีมมิงทั้งที่เพิ่งมีซีซันแรก และมีแววว่าจะมีซีซัน 2, 3, 4 ตามไปอีกนานๆ
            </cite>
          </blockquote>
        </div>
      </div>
    </main>
  );
}
