---
layout: mainlayout.njk
title: E-Health for Personal Sensor Application
subtitle: Bachelor Degree Graduated Project
next_page: /en/project/cost-estimation
activity_images:
  - \img\project\ehealth\1.jpg
  - \img\project\ehealth\2.jpg
  - \img\project\ehealth\3.png
  - \img\project\ehealth\4.png
next_page_name: ANN-Like for Cost Estimation
---

## Project Info

- **Project Type** : Bachelor Degree Graduated Project
- **Year**: 2019
- **Advisor**: Assoc. Prof. Thossaporn Kamolphiwong
- **Laboratory**: [Centre of Network Research](https://www.facebook.com/CNRPSU/), Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University
- **Download** : [Poster](https://project.coe.psu.ac.th/projects/5ebe1ecb480d363a31f2fc18/resources/5ebe1f8e453cbc35d4bad154/Poster_0428.pdf), [Video Presentation](https://www.youtube.com/watch?v=n3t4zmdihQ0&t=843s)

## Abstract

**E-health for Personal Sensor Application** is the project which build on top of **Researching Electronic Health System based on IoT**, from Assoc.Prof. Dr. Sinchai Kamolphiwong and others, which develops the application for collect glucose level, blood pressure, heart rate and oxygen saturation from health care device that based on Bluetooth. This project objectives are for making application a better performance while the application is looking for oxygen saturation and for improve application performance on analyzing the probability that use who own these vital sign values may have a risk in **Non-Communicable Diseases (NCDs)** which World Health Organization (WHO) expose that 73% of people who died from illness is from NCDs. Application will use glucose level, blood pressure, heart rate and oxygen saturation along with user medical history as data for analyzing. The produced application will be written in Kotlin and performed in Android Operating System. Application’s analyze methods divide into general method and specific method. For the general method, application will denote which user vital sign data is in **Normal Range**, **Warning Range** and **Danger Range**. For specific method, application will use multi-factor analyzing model to analyze the probability which user will take a risk in diabetes and application will use analyzing model from Thailand Hypertension Association for analyze users’ hypertension risk not only these but also application will use the report from Thailand National Health Survey (NHES) in 2014 for give them an advice. Application can archive project objectives, but a lot of asynchronous programing and a large amount of connecting to online database make the performance and stability of application are not appreciated. Application should be more develop before it takes a part in a personal health care.

## Related Article

- Blog - [1 Year from unknown project / 1 ปีกว่ากับโปรเจกต์ที่ไม่รู้ว่ามีอะไร และ ไม่รู้ว่าจะออกมายังไง](https://www.theduckcreator.in.th/it-blog/2020/06/05/senior-project-talk.html)
- Some of Code in (Open Source Part) - [Some part in Android App](https://github.com/cnrpsu-2019/cnrphr-open), [Dashboard and Editor Part](https://github.com/cnrpsu-2019/phr-dashboard)
- My Android Note - [Tin Android Doc](https://www.theduckcreator.in.th/tin-android-docs/)

## Gallery

<html>
{% gallery "ehealth" %}
{% for image in activity_images %}
{% galleryImage image, "ehealth for personal sensor application image" %}
{% endfor %}
{% endgallery %}
</html>
<div class="shadow-md grid grid-cols-2 md:grid-cols-3"></div>
