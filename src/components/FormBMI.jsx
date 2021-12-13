import React, { useState } from 'react'
import Image from './Image';

export default function FormBMI() {
    const [Weight, setWeight] = useState(0.00)
    const [Height, setHeight] = useState(0.00)
    const [BMI, setBMI] = useState(0.00)
    const [Result, setResult] = useState(0.00)
    const handleWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleHight = (e) => {
        setHeight(e.target.value)
    }

    const handleBMI = () => {
        if (Weight > 0 && Height > 0) {
            const hight = Height / 100;
            const bmi = Weight / (hight ** 2)
            setBMI(bmi)
            if (bmi > 30) {
                setResult("อ้วนมาก")
            } else if (bmi >= 25.00) {
                setResult("อ้วน")
            } else if (bmi >= 23.00) {
                setResult("ท้วม")
            } else if (bmi >= 18.50) {
                setResult("ปกติ")
            } else {
                setResult("น้ำหนักน้อย")
            }
        }

    }

    return (
        <div className='formBMI'>
            <div>{Weight} | {Height}</div>
            <label htmlFor="weight">น้ำหนักตัว (kg.)</label><br />
            <input type="number" name="weight" id="weight" min={0} value={Weight} onChange={handleWeight} /><br />
            <label htmlFor="height">ส่วนสูง (cm.)</label><br />
            <input type="number" name="height" id="height" min={0} value={Height} onChange={handleHight} /><br />
            <button className="buttonbmi" role="button" type="button" onClick={handleBMI}>คำนวณ</button><br />
            <div style={{ marginTop: 20 }}>
                ผลลัพธ์:  {BMI.toFixed(2)} | {Result}
            </div>
            <div>
                <Image BMI={Result} />
            </div>
        </div>
    )
}
