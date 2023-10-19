# CSS Overview

## CSS Dependency

<b>Pure CSS</b> | Build from scratch, less to learn
<b>Tool</b> ( Sass/Scss, Less, Css-in-js libs )
<b>Dependency</b> ( Bootstrap, Bulma, Antd, MUI ) | Ready to use, more to learn

# React Fiber

- Framework JS แต่ก่อน ใช้หลักกการ Observable Object ที่จะเข้าไป Mutate DOM ทำให้ Complex + Hard to predect และ Maintain ยาก

- จึงมี idea ที่ว่าเปลี่ยนจาก Mutation > Rerender โดยเอา snapshot ก่อนกับปัจจุบันมาเปรียบเทียบกัน (ไม่ mutate object แต่จะ return new object ออกมา)

## Reconciliation

### `a process of finding changes between current and updated version (diffing algorithm)` กระบวนการในการเปรียบเทียบการเปลี่ยนแปลง

`ตรวจสอบการเปลี่ยนแปลงและอัพเดทอย่างมีประสิทธิภาพ`

- จากเดิมที่เราเข้าไปจัดการ DOM ตรงๆ จะเปลี่ยนเป็นมี React มาขั้นกลาง โดยส่ง JSX ไปให้ React และ React จะ Compare changes ระหว่าง snapshot ก่อนหน้า กับ ปัจจุบัน มีจุดไหนแตกต่างกัน และ React จะอัพเดท DOM ให้ อย่างมีประสิทธิภาพ
- ช่วยให้ dev focus อยู่กับการเขียน logic

## Scheduling

### `the process of determining when sork should br performed` กระบวนการที่จะตรวจสอบว่าควรทำงานเมื่อไหร ให้มีประสิทธิภาพ

- fiber คือ work unit ที่เล็กที่สุด

## Hydration

#### traditional

- Browser download HTML มา (แสดงหน้าขาว ว่างๆ)\*
- Download JS มา และ excute
- เริ่ม render ให้ผู้ใช้เห็น content ที่ผู้ใช้ interaction ได้

<b>ปัญหาคือ</b> เมื่อ App เราใหญ่ขึ้น JS มีมากขึ้นเรื่อย ๆ การแสดงหน้้าขาว\* ก็จะใช้เวลานานขึ้น

#### pre-render

- Browser download HTML ที่มี content (HTML CSS) ให้ผูัใช้เห็น UI ก่อน มาแสดงก่อน (ไม่มี JS user ไม่สามารถ interaction ได้)
- Download JS มา และ excute
- ทิ้ง DOM ที่ pre-render ไว้ และแทนที่ด้วย DOM ที่สร้างโดย JS
- แสดง content ที่ผู้ใช้ interaction ได้

<b>ปัญหาคือ</b> แสดง content ได้ดีกว่าแบบแรกก็จริง แต่ time to interactve สูงกว่า และมีการทำงานที่ซ้ำซ้อน คือ load content มา และ โหลดใหม่อีกที มาแทนที่

<b>Reconciliation</b> จึงเข้ามาแก้ปัญหานี้ แทนที่จะทิ้ง DOM ที่สร้างโดย HTML ไปเลย แต่จะใช้ algorithm ในการเปรียบเทียบการเปลี่ยนแปลง และแก้ไขเฉพาะส่วนที่มีการเปลี่ยนแปลง
(เน้น Reuse)

#### reconciliation

- Browser download HTML ที่มี content (HTML CSS) และ JS จำนวนหนึ่ง (ประมาณ 1 kB) ทำให้มีการ interact ได้บางส่วน
- Download JS มา และ excute (ขนาด JS จะเล็กลงมาก เพราะ download มาแค่ส่วนที่ทำให้เกิด interaction ได้ ส่วนที่ใช้สร้าง DOM ส่วนใหญ่ จะได้มาจากการ Resue)

<b>ขั้นตอนการเติม HTML แห้งๆ ให้สามารถ interactive ได้ เรียกว่า HYDRATION</b>
