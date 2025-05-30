---
layout: mainlayout.njk
title: E-Manufac
subtitle: ระบบบริหารจัดการและติดตามการผลิต
activity_images:
  - /img/project/emanufac/1.jpg
  - /img/project/emanufac/2.jpg
  - /img/project/emanufac/3.jpg
  - /img/project/emanufac/4.jpg
  - /img/project/emanufac/5.png
  - /img/project/emanufac/6.png
  - /img/project/emanufac/7.png
prev_page: /th/project/eaccom
prev_page_name: E-Accom
next_page: /th/project/eiotsoft
next_page_name: E-IoTSoft
---

## Project Info

- **Project Type** : Working Project
- **Year** : 2021 - Present
- **Owner** : [Intelligent Automation Research Center](https://iarc.psu.ac.th)
- **Technique** : JavaScript, React, MongoDB, GraphQL, Microservice
- **Website** : [iarc.psu.ac.th/digital-platform](https://iarc.psu.ac.th/digital-platform)
- **Role in Project** : Project Manager, Developer

## Information

ระบบบริหารจัดการและติดตามการผลิต เป็นระบบ ERP ย่อม ๆ สำหรับการผลิตในอุตสาหกรรม SMEs รายย่อย เริ่มพัฒนาตั้งแต่ปี 2564 จากการสนับสนุนของศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 11 และมหาวิทยาลัยสงขลานครินทร์ โดยเริ่มทดลองใช้ในอุตสาหกรรมบนอำเภอหาดใหญ่ จังหวัดสงขลา ระบบมีความครอบคลุมทั้งคลังวัตถุดิบ คลังสินค้า และการติดตามการผลิตในแต่ละขั้นตอน ต่อมาได้ออกแบบให้โปรแกรมสามารถทำงานในอุตสาหกรรมที่หลากหลายยิ่งขึ้น มีสิ่งต่างๆ ในการผลิตเข้ามาเกี่ยวข้องมากขึ้น ไม่ว่าจะเป็นเรื่องของ Bill of Material, การกระจาย Batch, การแยกหรือรวมกิจกรรม และรวมถึงการออกแบบระบบให้มีความยืดหยุ่นต่ออุตสาหกรรมการผลิต และสามารถ Config ระบบให้เหมาะกับการใช้งานได้ ปัจจุบันมีอยู่ในระหว่างการวิจัยและพัฒนาเพิ่มระบบการคิดต้นทุนต่าง ๆ

## Gallery

<html>
{% gallery "emanufac" %}
{% for image in activity_images %}
{% galleryImage image, "emanufac-gallery" %}
{% endfor %}
{% endgallery %}
</html>
