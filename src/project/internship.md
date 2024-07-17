---
layout: mainlayout.njk
title: 10.28 Bike Register System
subtitle: ระบบจัดการการลงทะเบียนเข้าร่วมกิจกรรมปั่นจักรยาน
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

- **Project Type** : Internship Project
- **Year** : 2019
- **Owner** : เขื่อนวชิราลงกรณ การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย
- **Technique** : PHP, Laravel, MySQL
- **Role in Project** : Developer

## Information

ในปี 2562 ผมได้มีโอกาศไปร่วมฝึกงานที่เขื่อนวชิราลงกรณ จังหวัดกาญจนบุรี การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย โดยได้เข้าไปฝึกกับหน่วยงานดิจิทัล เขื่อนวชิราลงกรณ และได้ทั้งช่วยงาน และ รับมอบหมายงานหลายอย่าง หนึ่งในนั้นคือได้มีส่วนในการทำระบบลงทะเบียน (ภายใน) สำหรับกิจกรรมปั่นจักรยาน 10.28 Bike @ เขื่อนวชิราลงกรณ เพื่อเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว เนื่องในวันพระราชสมภพ โดย สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภาฯ ได้เสด็จมาเป็นองค์ประธานในพิธีเปิด และทรงร่วมปั่นจักรยาน

ระบบดังกล่าวเป็นระบบภายในสำหรับให้เจ้าหน้าที่กรอกข้อมูลการรับสมัคร สำหรับคนที่มาสมัครเข้าร่วมแบบ Onsite มีแบบฟอร์มการรับสมัคร สรุปผลการรับสมัคร ใส่สถานะต่างๆ เช่น การรับเสื้อ รับ BIB โดยผมและเพื่อนๆ อีก 2 คนทีไปฝึกงานได้ร่วมพัฒนาระบบนี้ขึ้นมา โดยใช้ภาษา PHP และ ฐานข้อมูลบน MySQL 
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
