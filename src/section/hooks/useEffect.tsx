import React, { useEffect, useState, Component } from "react";

// # เมื่อมีการ setState ซ้ำๆ กัน React จะมีการ batch state ที่ติดๆ กัน เข้าไปอยู่ในการ rerender แค่ครั้งเดียว

// useEffect is a React Hook that lets you synchronize a component with an external system.

// functional component
// # Synchronization
// # Immutable state ไม่สามารถเปลี่ยน stat ตอนที่กำลัง render ได้

// # it is not the variable that changes inside effext but the effect that is diferent between render

export default function Counter() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log(`You clicked ${count} times`); // ใช้ count ของแต่ละ snapshot
  //     }, 3000);
  //   });

  useEffect(() => {
    const handleScroll = () => {
      console.log(`count: ${count} | scrollY: ${window.scrollY}`);
    };

    console.log(`run effect at count: ${count}`);

    window.addEventListener("scroll", handleScroll);

    // clean up callback
    return () => {
      console.log(`clean up effect at count: ${count}`);
      window.removeEventListener("scroll", handleScroll);
    };

    // ความเชื่อผิด ๆ
    // !!!!! # จะถูกเรียกแค่ครั้งเดียวเมื่อ component ถูก unmount จาก DOM

    // สิ่งที่ถูก
    // # จะถูก run ทุกครั้งเมื่อมีการ rerender
    // # จะ run clean up หลังจากที่ DOM painted (UI changed) เพราะไม่ต้องการไม่ให้มีการไป block main thread ของ browser
  });

  return (
    <div>
      <code>fuctional component</code>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me !</button>
    </div>
  );
}

// class components
// # Life cycle
// # Mutable state // สามารถเปลี่ยน state กระทันหันได้ระหว่าง render

// export default class Counter extends Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount(): void {
//     setTimeout(() => {
//       console.log(`You clicked ${this.state.count} times`);
//     }, 3000);
//   }

//   componentDidUpdate(
//     prevProps: Readonly<any>,
//     prevState: Readonly<any>,
//     snapshot?: any
//   ): void {
//     setTimeout(() => {
//       // จะ run state ล่าสุด ณ ตอนที่ run | state ล่าสุด ณ ตอนนั้น
//       console.log(`You clicked ${this.state.count} times`);
//     }, 3000);

//     //     // วิธีแก้ให้ run เหมือน functional ใช้ Closures เข้ามาช่วย
//     //     const count = this.state.count;  // ในแต่ละครั้งที่มีการ rerender count จะเก็บ state ของรอบนั้นๆ ไว้
//     //     setTimeout(() => {
//     //       // จะ run state ล่าสุด ณ ตอนที่ run | state ล่าสุด ณ ตอนนั้น
//     //       console.log(`You clicked ${count} times`);
//     //     }, 3000);
//   }

//   render() {
//     return (
//       <div>
//         <code>class component</code>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me !
//         </button>
//       </div>
//     );
//   }
// }
