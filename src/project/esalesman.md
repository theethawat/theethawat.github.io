---
layout: mainlayout.njk
title: E-Salesman
subtitle: ระบบนายหน้าขายสินค้า
activity_images:
  - /img/project/eaccom/1.jpg
  - /img/project/eaccom/2.jpg
  - /img/project/eaccom/3.jpg
  - /img/project/eaccom/4.jpg
  - /img/project/eaccom/5.png
  - /img/project/eaccom/6.png
  - /img/project/eaccom/7.png
  - /img/project/eaccom/8.jpg
---

## Project Info

- **Project Type** : Working Project
- **Year** : 2020 - 2021
- **Owner** : [Intelligent Automation Research Center](https://iarc.psu.ac.th), Industrial Promotion Center Region 11
- **Technique** : JavaScript, React, MongoDB, TypeScript, Ionic
- **Role in Project** : Developer

## Information

โครงการ E-Salesman เป็นแนวคิดที่จะช่วยเหลือผู้ประกอบการในภาวะการแพร่ระบาดของโรคโควิด 19 ในพื้นที่ภาคใต้ ด้วยการใช้ความสามารถของนักศึกษา หรือ ผู้ที่มีความสามารถมาเป็นนายหน้าสำหรับการขายสินค้าของผู้ประกอบการณ์ และมีการแบ่งส่วนแบ่งให้ 

E-Salesman ประกอบไปด้วยระบบร้านค้าออนไลน์ของร้านค้าที่เข้าร่วมรายการ ระบบเว็บไซต์กลาง สำหรับลงทะเบียน เลือกแชร์สินค้า เช็ครายการ และขอรับค่าคอมมิชชั่น และมี Mobile Application เพื่อให้ง่ายกับการใช้งาน โดยเว็บแอพพลิเคชั่นได้รับการพัฒนาผ่าน React JS ส่วน Mobile Application พัฒนาในรูปแบบ Cross Platform ผ่าน Ionic Framework

แม้ว่าตัวระบบหลักของ E-Salesman อาจจะไม่ได้ประสบความสำเร็จมากนัก แต่ในส่วนระบบย่อยของแต่ละร้านค้า ยังได้รับการพัฒนาต่อผ่านทางศูนย์วิจัยระบบอัตโนมัติอัจฉริยะ ปัจจุบันได้มีเวอร์ชั่นต่อไปในนามของ [E-Merchant](https://emerchant.me) ซึ่งเป็นระบบ Coperation E-Commerce ที่มีฟังก์ชันหลากหลาย ทั้งระบบหน้าร้านและระบบ POS ภายใน  


## Gallery

<div class="grid grid-cols-3 md:grid-cols-4 gap-4">
{% for image in activity_images%}
<a href="{{image}}" target="_blank">
<img src="{{ image }}" alt="E-Accom System" class="h-48 image-cover  max-w-full cursor-pointer hover:shadow-lg  rounded-sm" />
</a>
{% endfor %}
</div>

<!-- <html>
{% gallery "eaccom" %}
{% for image in activity_images %}
{% galleryImage image, "hi" %}
{% endfor %}
{% endgallery %}
</html> -->
