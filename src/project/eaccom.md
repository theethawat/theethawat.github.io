---
layout: mainlayout.njk
title: E-Accom
subtitle: ระบบบริหารจัดการโรงแรม รีสอร์ท และโฮมสเตย์
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
- **Year** : 2021 - 2023
- **Owner** : [Intelligent Automation Research Center](https://iarc.psu.ac.th)
- **Technique** : JavaScript, React, MongoDB
- **Website** : [eaccom.net](https://eaccom.net)
- **Role in Project** : Project Manager, Developer

## Information

ระบบบริหารจัดการโรงแรม E-Accom เป็นความพยามยามของ ศูนย์วิจัยระบบอัตโนมัติอัจฉริยะ ภายใต้ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ และ สำนักวิจัยและพัฒนา มหาวิทยาลัยสงขลานครินทร์ ที่จะนำความรู้และประสบการณ์ที่ได้จากการบริการวิชาการในภาคธุรกิจเกี่ยวกับการท่องเที่ยงตั้งแต่ปี พ.ศ. 2563 จนถึง พ.ศ. 2564 มารวมเป็นระบบเดียวกัน ที่มีครบทั้งระบบ Property Management System (PMS), ระบบหน้าเว็บไซต์สำหรับโรงแรมที่สามารถสร้างการจองได้, ระบบ Self-Checkin และ ระบบลูกค้าสัมพันธ์ การพัฒนาระบบ E-Accom เวอร์ชั่นปัจจุบัน เป็นเวอร์ชันที่ 2 ของระบบ เริ่มพัฒนาในเดือนสิงหาคม 2564 ได้รับการสนับสนุนการพัฒนาจาก ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 10 กรมส่งเสริมอุตสาหกรรม, ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 11

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
