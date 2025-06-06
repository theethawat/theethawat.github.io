---
layout: mainlayout.njk
title: ANN-Like for Manufacturing Cost Estimation
subtitle: Master Degree Research
prev_page: /th/project/ehealth
prev_page_name: E-Health For Personal Sensor Application
next_page: /th/project/eaccom
next_page_name: E-Accom
---

## Project Info

- **รูปแบบงาน** : งานวิจัยระดับปริญญาโท
- **ปี** : 2566 - ปัจจุบัน
- **ที่ปรึกษา**: ผศ.ดร. นิคม สุวรรณวร
- **ร่วมงานกับ**: ศูนย์วิศวกรรมระบบอัตโนมัติอัจฉริยะ และ สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์

## บทคัดย่อ

ต้นทุนมีส่วนสำคัญอย่างมากต่อผลกำไร และการตั้งราคาของสินค้าในสภาวะที่เสถียรภาพของห่วงโซ่อุปทานน้อยลง ในงานวิจัยต่างๆ ที่ผ่านมาได้มีการใช้เครื่องมือต่าง ๆ ทางการเรียนรู้ของเครื่องจักร (Machine Learning) เช่น โครงสร้างประสาทเทียม (Artificial Neural Network หรือ ANN) และโมเดลอื่น ๆ ที่สืบทอดไป รวมถึงยังมีการใช้หลักการของการปรับเส้นโค้ง (Curve Fitting) ที่ใช้ทฤษฎีวิเคราะห์การถดถอย (Regression Analysis) ต่าง ๆ งานวิจัยชิ้นนี้เสนอโมเดลลูกผสมสำหรับการประมาณการต้นทุน โดยได้จากการรวมจุดเด่นของการใช้การเรียนรู้เครื่องจักร และ การวิเคราะห์การถดถอย โมเดลที่สร้างขึ้นตั้งอยู่บนพื้นของการประมาณการต้นทุนแบบพาราเมตริกซ์ (Parametric Cost Estimation) ที่มีการแทนที่ความสัมพันธ์สำหรับการประมาณการต้นทุน (Cost Estimation Relationships หรือ CERs) แบบดั้งเดิมด้วยการใช้โครงสร้างประสาทเทียม และใช้หลักการประมาณการต้นโดยการวิเคราะห์ (Analytic Cost Estimation) ที่มีชื่อว่า การประมาณการต้นทุนฐานกิจกรรมตามเวลา (Time-Driven Activity-Based Costing หรือ TDABC) โดยในการทดลองนี้จะใช้ข้อมูลจากอุตสาหกรรมการผลิตเนื้อปูพาสเจอร์ไรซ์พร้อมทาน เป็นกรณีศึกษา โดยอยาภายใต้การรวมทุกขั้นตอนการผลิตเป็นขั้นตอนเดียว การทำงานเริ่มจากปรับสมการหลักของการประมาณการต้นทุนฐานกิจกรรมตามเวลา ให้เหมาะสมกับโครงสร้างประสาทเทียม จากนั้นแปลงสมการให้ออกมาเป็นโมเดล ที่มีหน่วยประมวลกลาง รับผลลัพธ์มาจากหน่วยประมวลผลย่อยของต้นทุนในกลุ่มต่าง ๆ โมเดลถูกออกแบบให้มีค่าน้ำหนักของตัวแปรแต่ละตัวในส่วนย่อยของโมเดล น้ำหนักของส่วนย่อยต่อโมเดล รวมถึงค่าคงที่ที่สามารถเรียนรู้ได้อย่างไบแอส (Bias) โดยจะมีการตั้งค่าเริ่มต้นให้ในรอบที่หนึ่งของการให้การเรียนรู้ และในแต่ละรอบส่วนประกอบทั้งสามส่วนย่อยของโมเดล จะประมาณการต้นทุน และจะมารวมกันเป็นต้นทุนของสินค้า และเช่นนั้นเองในแต่ละรอบของการเรียนรู้ ค่าน้ำหนัก และ ไบแอส จะถูกปรับโดยใช้วิธีที่ได้รับแรงบันดาลใจมาจากการถดถอยของกราเดียนต์ (Gradient Descent) โดยใช้ค่าอนุพันธ์ของค่าเฉลี่ยข้อผิดพลาดกำลังสอง (Mean Square Error) ที่ได้จากการเปรียบเทียบระหว่างต้นทุนที่ทำนายได้โดยโมเดล และต้นทุนจริงของข้อมูลที่เข้ามาสอนโมเดล นอกจากนี้ยังมีการใช้หลักการการทำให้อยู่ในรูปปกติ (Normalization), การกำจัดข้อมูลที่ผิดปกติ (Outlier Removal) และ การเสริมข้อมูล (Data Augmentation) เพื่อลดความซับซ้อน และเพิ่มประสิทธิภาพการทำงานของโมเดล ผลจากการทดลองพบว่าโมเดลสามารถประมาณการต้นทุนในชุดข้อมูลจริงของโรงงานได้ มีความผิดพลาด 15.76 % ภายหลังจากการมีการกำจัดข้อมูลที่ผิดปกติและการเสริมข้อมูลแล้ว แต่ในข้อมูลที่มีความซับซ้อนสูงขึ้น ยังต้องมีการปรับแต่งและพัฒนาเพิ่มขึ้น เพื่อให้โมเดลสามารถประมาณการและได้ผลออกมาเป็นที่พอใจได้

## การตีพิมพ์

### Time Driven Cost Estimation Learning Model - Theethawat Savastham & Nikom Suvonvorn

Conference Paper ใน [Genetic and Evolutionary Computing](https://link.springer.com/book/10.1007/978-981-96-1531-5), ในซีรีส์ของ Lecture Notes in Electrical Engineering (LNEE,volume 1321), Springer, 8 กุมภาพันธ์ 2568 จากการนำเสนอในการประชุมวิชาการ [International Conference on Genetic and Evolutionary Computing 2024 (ICGEC-2024)](https://icgec24.github.io/), เมืองมิยาซากิ จังหวัดมิยาซากิ ประเทศญี่ปุ่น เมื่อ 28 สิงหาคม 2567

Savastham, T., Suvonvorn, N. (2025). Time-Driven Cost Estimation Learning Model. In: Pan, JS., Zin, T.T., Sung, TW., Lin, J.CW. (eds) Genetic and Evolutionary Computing. ICGEC 2024. Lecture Notes in Electrical Engineering, vol 1321. Springer, Singapore. https://doi.org/10.1007/978-981-96-1531-5_26

<a href="https://link.springer.com/chapter/10.1007/978-981-96-1531-5_26"><button class="btn btn-sm btn-accent">Go To Paper</button></a>
