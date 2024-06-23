import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog1() {
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
          เอาใจช่วยอาเนียปกป้องสันติภาพของโลกใน Spy x Family Code: White
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg ng nh c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="https://img1.picmix.com/output/pic/normal/3/5/4/8/10598453_f1977.gif"
          />
        </div>
        <div>
          <p className="mb-4">
            
            <br />
            Spy x Family Code: White  เป็นภาพยนตร์อนิเมชั่นแอ็คชั่น คอมเมดี้ที่เกี่ยวกับสายลับหนุ่มที่ได้รับภารกิจแฝงตัวเพื่อเข้าถึงบุคคลอันตราย เขาตัองสร้างครอบครัวปลอมขึ้นมาโดยการรับเลี้ยงเด็กหญิงอายุ 6 ขวบที่เขาไม่รู้เลยว่าหนูน้อยแอบซ่อนพลังอ่านใจได้ รวมทั้งภรรยาสาวที่ยอมแต่งงานธุรกิจด้วยเพื่อทำตัวเป็นคนทั่วไปปิดบังตัวตนนักฆ่าของเธอ

โดยภาพยนตร์อนิเมชั่นดังกล่าวฉายภายในประเทศไปแล้วช่วงธันว่าคมในปี 2023 ที่ผ่านมา กำกับโดยทาคาชิ คาตางิริ บทภาพยนตร์โดยอิจิโระ โอโคอุจิและอำนวยการสร้างโดย Wit Studio x  CloverWorks สร้างจากมังงะในชื่อเดียวกันที่เขียนและวาดโดย ทัตสึยะ เอนโด
          </p>
          
        </div>
      </div>
    </main>
  );
}
