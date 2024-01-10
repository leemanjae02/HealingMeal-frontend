// import { useForm } from "../hooks/useForm";
// import { useState } from "react";
// import axios from "axios";
// import "../styles/FindPwPage.less";
// const ChangePWPage = () => {
//   const [name, onChangeName] = useForm();
//   const [email, onChangeEmail] = useForm();
//   const [id, onChangeId] = useForm();

//   const [answer, setAnswer] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const FindID = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !email || !id) {
//       setMessage("이름 이메일 아이디를 모두 입력해주세요.");
//       return;
//     } else {
//       setMessage("");
//     }
//     try {
//       const response = await axios.get(
//         "http://localhost:8080/user/search/pwd",
//         {
//           params: { name, email, loginId: id },
//         }
//       );
//       if (response.status === 200) {
//         setAnswer(response.data);
//       }
//     } catch (error) {
//       setMessage("이름 이메일 아 다시 확인하고 입력해주세요.");
//       console.log(error);
//     }
//   };
//   return (
//     <div className="Container">
//       <header></header>
//       <p>
//         <strong>Healing Meal</strong> 비밀번호 찾기
//       </p>
//       <hr />
//       <div className="Box">
//         <div className="textbox">
//           <strong>회원 정보에 등록한 이름과 이메일로 인증</strong>
//           <span>
//             회원정보에 등록한 이메일과 입력한 이메일이 같아야, 인증이
//             가능합니다.
//           </span>
//           <form>
//             <div className="InputBox">
//               <div className="InforInput">
//                 <strong>아이디</strong>
//                 <input
//                   type="text"
//                   placeholder="아이디"
//                   value={id}
//                   onChange={onChangeId}
//                 />
//               </div>
//             </div>
//             <div className="InputBox">
//               <div className="InforInput">
//                 <strong>이&nbsp;&nbsp;&nbsp;름</strong>
//                 <input
//                   type="text"
//                   placeholder="이름"
//                   value={name}
//                   onChange={onChangeName}
//                 />
//               </div>
//             </div>
//             <div className="InputBox">
//               <div className="InforInput">
//                 <strong>이메일</strong>
//                 <input
//                   type="email"
//                   placeholder="이메일"
//                   value={email}
//                   onChange={onChangeEmail}
//                 />
//               </div>
//             </div>
//           </form>
//           <div className="FindId_message_box">
//             {message && <p>•{message}</p>}
//           </div>
//           {answer && (
//             <div className="answerBox">
//               <div>{answer}</div>
//             </div>
//           )}
//         </div>
//         <button className="next-Btn" type="submit" onClick={FindID}>
//           요청
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChangePWPage;
