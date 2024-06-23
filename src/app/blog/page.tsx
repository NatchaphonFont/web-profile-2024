import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog() {
  return (
    <main className="container" style={{backgroundImage: 'url("https://cdn.dribbble.com/users/2156796/screenshots/19992280/media/7d2ee3a4d15d1f335419059066067694.gif")', minHeight: '100vh', maxWidth: 'none', padding: '24px'}}>
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Profile
          </Link>
        </div>
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*BLOG 1*/}
          <article className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                เอาใจช่วยอาเนียปกป้องสันติภาพของโลกใน Spy x Family Code: White
                </h2>
                <p className="text-gray-600 mb-10">
                 ความลับของความครัว Forger
                </p>
                <Link
                  href="/blog/SpyXFamily-Code-White"
                  className="text-pink-500 hover:text-pink-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://img1.picmix.com/output/pic/normal/3/5/4/8/10598453_f1977.gif"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>

          {/*BLOG 2*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                มารู้จักน้อง “อาเนีย” (Anya) จากอนิเมะสุดฮิตเรื่อง Spy x Family!
                </h2>
                <p className="text-gray-600 mb-10">
                  “คอการ์ตูนหลายๆ คนน่าจะรู้จักตัวละครสุดน่ารักน่าเอ็นดูที่ชื่อว่าน้อง “อาเนีย” จากแอนิเมชั่น Spy x Family ที่กำลังจะเข้าฉายพาร์ท 2 ในเดือนตุลาคมนี้ ใครที่กำลังสนใจเราขอมาเล่าเรื่องย่อคร่าวๆ ของอนิเมะเรื่องนี้กันก่อน”
                </p>
                <Link
                  href="/blog/Anya-Blog"
                  className="text-pink-500 hover:text-pink-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://img1.picmix.com/output/pic/normal/9/1/7/1/10571719_75ed7.gif"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
          {/*BLOG 3*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                เหตุผลที่ทำไมฮิตมาก! Spy x Family เมื่อสายลับเด็กอ่านใจคนได้ สาวนักฆ่า และหมาที่รู้อนาคต กลายมาเป็นครอบครัวเดียวกัน
                </h2>
                <p className="text-gray-600 mb-10">
                Spy x Family เป็นแอนิเมชันที่กำลังฮิตมากตอนนี้ สังเกตได้จากเทศกาลฮัลโลวีนที่ผ่านมาที่ประเทศญี่ปุ่นมีการแต่งตัวตามแอนิเมชันเรื่องนี้กันจำนวนไม่น้อย และเอาเข้าจริงๆ Spy x Family ก็ฮิตไปค่อนโลกแล้ว ผ่านพรมแดนภาษาและซับไตเติลไปครองใจคนดูทุกเพศทุกวัย ไม่เว้นแม้แต่เด็กหรือผู้ใหญ่
                </p>
                <Link
                  href="/blog/Anya-Blog1"
                  className="text-pink-500 hover:text-pink-700 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://img1.picmix.com/output/pic/normal/9/7/5/4/10544579_3d47e.gif"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
