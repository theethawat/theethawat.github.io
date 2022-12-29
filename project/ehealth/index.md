---
layout: mainlayout.njk
title: E-Health for Personal Sensor Application
subtitle: Bachelor Degree Graduated Project
---

# E-Health for Personal Sensor Application

## Project Info

- Project Type : Bachelor Degree Graduated Project
- Academic Year: 2019
- Advisor: Assoc. Prof. Thossaporn Kamolphiwong
- Laboratory: Centre of Network Research, Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University
- Data on Computer Engineering Database : [CoE Project Database](https://project.coe.psu.ac.th/projects/5ebe1ecb480d363a31f2fc18)

## Abstract

**E-health for Personal Sensor Application** is the project which build on top of **Researching Electronic Health System based on IoT**, from Assoc.Prof. Dr. Sinchai Kamolphiwong and others, which develops the application for collect glucose level, blood pressure, heart rate and oxygen saturation from health care device that based on Bluetooth. This project objectives are for making application a better performance while the application is looking for oxygen saturation and for improve application performance on analyzing the probability that use who own these vital sign values may have a risk in **Non-Communicable Diseases (NCDs)** which World Health Organization (WHO) expose that 73% of people who died from illness is from NCDs. Application will use glucose level, blood pressure, heart rate and oxygen saturation along with user medical history as data for analyzing. The produced application will be written in Kotlin and performed in Android Operating System. Application’s analyze methods divide into general method and specific method. For the general method, application will denote which user vital sign data is in **Normal Range**, **Warning Range** and **Danger Range**. For specific method, application will use multi-factor analyzing model to analyze the probability which user will take a risk in diabetes and application will use analyzing model from Thailand Hypertension Association for analyze users’ hypertension risk not only these but also application will use the report from Thailand National Health Survey (NHES) in 2014 for give them an advice. Application can archive project objectives, but a lot of asynchronous programing and a large amount of connecting to online database make the performance and stability of application are not appreciated. Application should be more develop before it takes a part in a personal health care.

## บทคัดย่อ

โปรแกรมประยุกต์สำหรับรวบรวมและวิเคราะห์ข้อมูลสุขภาพส่วนบุคคลผ่านตัวรับรู้ต่าง ๆ จัดทำขึ้นเพื่อพัฒนาต่อยอด งานวิจัยการพัฒนาระบบสุขภาพอิเล็กทรอนิกส์ผ่านไอโอที ของ รศ. ดร. สินชัย กมลภิวงศ์ และคณะ ที่พัฒนาโปรแกรมประยุกต์สำหรับการเก็บค่าระดับน้ำตาลในเลือด ความดันโลหิต อัตราการเต้นของหัวใจ และ ความอิ่มตัวของออกซิเจนในเลือด จากอุปกรณ์ดูแลสุขภาพที่ใช้เทคโนโลยีบลูทูธ เพื่อที่จะแก้ไขข้อผิดพลาดที่โปรแกรมประยุกต์จากงานวิจัยยังทำงานไม่สมบูรณ์ในส่วนของการรับข้อมูลจากอุปกรณ์วัดความอิ่มตัวของออกซิเจนในเลือด และเพิ่มประสิทธิภาพในด้านการวิเคราะห์ความน่าจะเป็นที่ผู้ใช้งานโปรแกรมประยุกต์ จะเป็นผู้ที่มีความเสี่ยงต่อโรคในกลุ่ม โรคไม่ติดต่อเรื้อรัง (NCDs) ซึ่งองค์การอนามัยโลกได้เปิดเผยว่าผู้เสียชีวิตจากโรคในกลุ่มนี้ คิดเป็นร้อยละ 73 ของผู้เสียชีวิตจากโรคภัยทั้งหมด โดยจะใช้ข้อมูลจากการวัดค่าระดับน้ำตาลในเลือด ความดันโลหิต อัตราการเต้นของหัวใจ และ ความอิ่มตัวของออกซิเจนในเลือด ร่วมกับ ประวัติการเป็นโรคต่าง ๆ ของผู้ใช้งาน ในการวิเคราะห์ โปรแกรมประยุกต์ที่พัฒนาจะเป็นโปรแกรมประยุกต์ที่ทำงานอยู่บนระบบปฏิบัติการแอนดรอยด์ เขียนด้วยภาษาคอทลิน โปรแกรมจะนำข้อมูลมาเก็บไว้ในฐานข้อมูลบนเครื่องแม่ข่าย Firebase Cloud Firestore ก่อนจะข้อมูลเหล่านี้ไปใช้ในการวิเคราะห์ความเสี่ยงทั้งวิธีทั่วไป ที่เป็นการจำแนกค่าที่ผู้ใช้วัดเป็นค่าที่อยู่ในเกณฑ์ดี เกณฑ์เสี่ยง และ เกณฑ์อันตราย และ การวิเคราะห์แบบเฉพาะเจาะจง ที่จะใช้กับการวิเคราะห์ความเสี่ยงที่ผู้ใช้งานจะเป็นโรคเบาหวาน โดยใช้ปัจจัยต่าง ๆ หลากหลายปัจจัย และการวิเคราะห์ความเสี่ยงที่ผู้ใช้งานจะเป็นโรคความดันโลหิตสูง ที่ใช้วิธีการวิเคราะห์ของสมาคมโรคความดันโลหิตสูงแห่งประเทศไทย รวมถึงใช้ข้อมูลผลการสำรวจสุขภาพประชากรไทยในปี พ.ศ. 2557 มาเป็นข้อมูลประกอบคำแนะนำอีกด้วย โปรแกรมประยุกต์ที่สร้างมาสามารถทำงานได้ตามวัตถุประสงค์ของโครงงาน แต่ด้วยโปรแกรมที่พัฒนาด้วยการเขียนโปรแกรมแบบไม่ประสานเวลาจำนวนมาก รวมถึงการรับส่งข้อมูลกับฐานข้อมูลที่อยู่บนเครื่องแม่ข่ายมากเกินไป ทำให้เสถียรภาพของโปรแกรมไม่ดีเท่าที่ควร จำเป็นต้องพัฒนาเพิ่มเติม เพื่อจะนำโปรแกรมประยุกต์นี้ไปใช้งานจริงกับผู้ใช้ได้

## Related Article

- Blog - [1 Year from unknown project / 1 ปีกว่ากับโปรเจกต์ที่ไม่รู้ว่ามีอะไร และ ไม่รู้ว่าจะออกมายังไง](https://www.theduckcreator.in.th/it-blog/2020/06/05/senior-project-talk.html)
- Some of Code in (Open Source Part) - [Some part in Android App](https://github.com/cnrpsu-2019/cnrphr-open), [Dashboard and Editor Part](https://github.com/cnrpsu-2019/phr-dashboard)
- My Android Note - [Tin Android Doc](https://www.theduckcreator.in.th/tin-android-docs/)

<br>
<div class="acenter">
<a href="/">
<button class="button is-primary">Back</button>
</a>
</div>
