// 메인 실행 프로그램
import { StudentClass } from "./studenClass.js";
import { StudentRepository } from "./student-repository.js";
import { EventHandler } from "./event-handler2.js";

let studentRepository = new StudentRepository();

// 테스트를 위한 더미데이터 입력
studentRepository.addStudent(new StudentClass(10, '홍길동', 70, 67, 97));
studentRepository.addStudent(new StudentClass(11, '김기정', 67, 64, 58));
studentRepository.addStudent(new StudentClass(12, '이기정', 89, 77, 62));
studentRepository.addStudent(new StudentClass(13, '최기정', 93, 96, 57));
studentRepository.addStudent(new StudentClass(14, '최기정', 100, 79, 43));

let eventHandler = new EventHandler();
eventHandler.eventRegist();

export { studentRepository };