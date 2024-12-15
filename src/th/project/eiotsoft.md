---
layout: mainlayout.njk
title: E- Machine / E-IotSoft
subtitle: ระบบแดชบอร์ด และ ควบคุมสำหรับ IoT
activity_images:
  - \img\project\eiot\147278054_3693318977423555_4131158599099766082_n.jpg
  - \img\project\eiot\147278054_3693318977423555_4131158599099766082_n.jpg
  - \img\project\eiot\148960014_3693326094089510_3865423504178578198_n.jpg
  - \img\project\eiot\6.png
  - \img\project\eiot\5.png
  - \img\project\eiot\7.png
  - \img\project\eiot\9.png
prev_page: /th/project/emanufac
prev_page_name: E-Manufac
next_page: /th/project/internship
next_page_name: 10.28 Bike
---

## Project Info

- **Project Type** : Working Project
- **Year** : 2020 - 2021
- **Owner** : [Intelligent Automation Research Center](https://iarc.psu.ac.th)
- **Technique** : JavaScript, React, MongoDB, Firebase Realtime DB, MQTT
- **Website** : [emachine.efactory.biz](https://emachine.efactory.biz)
- **Role in Project** : Developer

## Information

ระบบนี้ได้ถูกพัฒนาขึ้นเริ่มแรก เพื่อใช้สำหรับการมอนิเตอร์ และ ควบคุม ระบบน้ำประปาหมู่บ้านของตำบลสะกอม อำเภอจะนะ จังหวัดสงขลา แต่ได้มีการพัฒนาโปรแกรม ให้รอบรับการเปลี่ยนแปลงที่หลากหลาย มีความเป็น General สำหรับการพัฒนาต่อ โปรแกรมพัฒนาโดยการให้ข้อมูลวิ่งจากเครื่อง PLC เข้าสู่ระบบ Cloud ผ่าน IoT Gateway บน Siemense IoT 2000 และวิ่งเข้าไปบน Firebase Realtime Database จากนั้นระบบจะไป Pulling ข้อมูลจาก Realtime DB เข้ามาในโปรแกรม

ระบบดูออกแบบมาให้สามารถเลือกข้อมูลมาแสดงได้ เลือกรูปแบบของ Gauge และ เลือกรูปแบบของ Chart มาแสดงได้ โดยผู้ใช้งาน ไม่ขึ้นกับการพัฒนา รวมถึงสามารถส่งสัญญาณไป Control เครื่อง PLC ผ่านทาง Realtime Database ได้เช่นกัน

ปัจจุบัน แม้ทางผมจะไม่ได้พัฒนาระบบนี้แล้ว แต่ศูนย์วิจัยระบบอัตโนมัติอัจฉริยะ ได้พัฒนาระบบนี้ต่อ ในนามของระบบ E-Machine ได้มีการเปลี่ยนจากการใช้ Realtime Database บน Firebase ไปเป็นการใช้โปรโตคอลอย่าง MQTT มีการประยุกต์ใช้ที่หลากหลายยิ่งขึ้น รับจากอุปกรณ์ทั้ง PLC, Raspberry PI หรือ เซนเซอร์อื่นๆ ได้มากมาย รวมถึงมีระบบตัวแปร แดชบอร์ด การกรอกค่าโดยมนุษย์ ประมาณการบิลค่าไฟ และอื่นๆ อีกมากมาย

## Gallery

<html>
{% gallery "eiotsoft" %}
{% for image in activity_images %}
{% galleryImage image, "eiotsoft image" %}
{% endfor %}
{% endgallery %}
</html>
