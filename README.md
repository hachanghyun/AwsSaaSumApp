## 1. SERVER Deployment URL
  https://github.com/hachanghyun/awsSaaSummaryServer

## 2. FrontEnd Deployment URL
  https://github.com/hachanghyun/AwsSaaSumApp

# expo 앱개발 정리

## expo 프로젝트 세팅
### expo-cli 전역으로 설치해주는 명령어
    npm install -g expo-cli 

### expo 프로젝트 만들어주는 명령어
    expo init "프로젝트명"
    
### node module 설치 명령어(프로젝트안에서 실행)
    npm install

## expo 실행 명령어
### expo 프로젝트 실행
    npm start

## 빌드
### eas cli 설치
    npm install -g eas-cli
    
### expo 계정에 로그인
    eas login

### configure the project
    eas build:configure
    
### ios 빌드
    eas build -p ios

### ios 배포진행
    eas submit --platform ios 

### 안드로이드 빌드 
    eas build -p android

### 안드로이드 빌드 (에뮬레이터용 빌드)
     eas build -p android --profile preview

## 기타 설정 할것
### app.json
    {
    "expo": {
    "name": "awsSaaSumApp", //수정필수!!!
    "version": "1.0.2", //수정필수!!!

    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.hotong.awsSaaSumApp", //수정필수!!!
      "buildNumber": "1.0.2" //수정필수!!!
    },
    "android": {
      "package": "com.hotong.awsSaaSumApp", //수정필수!!!
      "versionCode": 3, //수정필수!!!
      "vsersionName" : "3.0", //수정필수!!!


## 1. Summary

### Aws SAA Summary View
You can find a summary at AWS SAA. If you click the service button in the index, You can check the contents of the service from AI.

### Search function
If you search for AWS SAA service, You can check the information with AI.   
 
### Test
You can ask AI questions about service content and receive answers.  

### About
You can check the app version and inquiry email. 

### Question
If you have any questions about our app, Please email us at the address below with detailed information.

Email: hacwx1@gmail.com 
 
Thank you:)

![unnamed](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/92523e19-97bd-4e6e-8d03-0f9455e27812)
![unnamed (1)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/09eaf7d2-286a-4438-b30c-24903ea3089d)
![unnamed (2)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/1bb8ce53-102e-4b55-bd09-6a532bd7dee5)
![unnamed (3)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/59aa0839-341c-4cfa-a9d2-fe5aaba12364)
![unnamed (4)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/5be55d96-a70c-4662-a13d-f9e9ed77b8c8)
![unnamed (5)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/bae61884-f38e-407f-acd2-f1fa021e5d1d)
![unnamed (6)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/908cf903-bfda-4ecf-afdb-2ee4eb4d0ac9)
![unnamed (7)](https://github.com/hachanghyun/awsSaaSummary/assets/33058284/85b8a9a4-69d0-4af9-b27a-b2ea72790a94)


## 2. Download QR code
<img width="1065" alt="1" src="https://github.com/hachanghyun/awsSaaSummary/assets/33058284/702fab34-ffa2-42af-974d-35040de6fc0d">

## 3. Application System Architecture
<img width="1331" alt="123" src="https://github.com/hachanghyun/awsSaaSummary/assets/33058284/fd7d652d-cf51-4651-bb7e-f0a96aa666f4">


## 4. Technology Stacks
#### Frontend : React Native
    
#### Backend : SpringBoot (Spring Data JPA), chat GPT API
    
#### Database : MariaDB

#### ETC : chat GPT API, AWS ElasticBeanstalk (Elastic Load Balancer), Amazon EC2, Amazon RDS, Amazon Route53, Amazon Cerficate Manager

## 5. 참조사이트

##### [Spring Boot + Chat GPT] Open AI API 적용기 
##### https://joecp17.tistory.com/72

##### openai chatgpt api Community libraries
##### https://platform.openai.com/docs/libraries/community-libraries

##### [Spring chatGPT] 스프링으로 openAI api 클라이언트 사용하기
##### https://woolfiekim.github.io/spring/chatgptstart/

##### [Retrofit] Retrofit을 이용해서 다양한 방식으로 API 요청을 해보자
##### https://bamdule.tistory.com/266

##### [React Native] 인스타그램 UI 만들기 #1
##### https://velog.io/@anpigon/React-Native-UI-%EB%A7%8C%EB%93%A4%EA%B8%B0-1

##### Mac-M1-환경변수PATH설정하기-ZSH-Ver
##### https://velog.io/@corner3499/Mac-M1-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98PATH%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-ZSH-Ver

##### npm, npx
##### https://ljh86029926.gitbook.io/coding-apple-react/undefined/npm-npx

##### Amazon RDS MariaDB 버전
##### https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/MariaDB.Concepts.VersionMgmt.html

##### Homebrew로 macOS에 MariaDB Server 설치
##### https://mariadb.com/kb/ko/installing-mariadb-on-macos-using-homebrew/

##### MariaDB 관리 접속 및 간단 사용법
##### https://codemonkyu.tistory.com/entry/MariaDB-MariaDB-%EA%B4%80%EB%A6%AC-%EC%A0%91%EC%86%8D-%EB%B0%8F-%EA%B0%84%EB%8B%A8-%EC%82%AC%EC%9A%A9%EB%B2%95

##### [MySql & Mariadb] 계정 조회 및 생성, 권한 추가 하는 방법
##### https://seill.tistory.com/757#google_vignette

##### [JPA] DATA JPA 사용 시 조심해야할 클래스 명에 대해
##### https://bepoz-study-diary.tistory.com/381

##### maven central
##### https://central.sonatype.com/

##### maven querydsl-jpa 
##### https://central.sonatype.com/artifact/com.querydsl/querydsl-jpa

##### [Java/SpringBoot] 인텔리제이 + Gradle 프로젝트에 Querydsl 설정하기
##### https://velog.io/@minjung0/JavaSpringBoot-%EC%9D%B8%ED%85%94%EB%A6%AC%EC%A0%9C%EC%9D%B4-Gradle-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-Querydsl-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

##### gradle plugin
##### https://plugins.gradle.org/plugin/com.github.ryarnyah.querydsl

##### [MYSQL] 실행,리스트보기,DB선택,테이블보기,비밀번호변경,백업,복원 명령어정리
##### https://fe-churi.tistory.com/43

##### AWS Elastic Beanstalk - Environment must have instance profile associated with it
##### https://stackoverflow.com/questions/51619828/aws-elastic-beanstalk-environment-must-have-instance-profile-associated-with-i

##### export-path-의-의미
##### https://medium.com/@jsr27382/export-path-%EC%9D%98-%EC%9D%98%EB%AF%B8-42a3a0fd7f86

##### i installed eas-cli but still getting error zsh command not found : eas macos
##### https://forums.expo.dev/t/i-installed-eas-cli-but-still-getting-error-zsh-command-not-found-eas-macos/69229/3

##### [React Native] pod install을 해야하는 이유
##### https://defineall.tistory.com/1222

##### [React Native] 앱 개발 - 프로젝트 기본 구조
##### https://ninedc.tistory.com/entry/React-Native-%EC%95%B1-%EA%B0%9C%EB%B0%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%A1%B0

##### [Error 해결법 포함] The iOS Simulator deployment target 'IPHONES_DEVELOPMENT_TARGET' is set to 8.0,but the range of suppoted deployment target vesions is 9.0 to 14.4.99.
##### https://fomaios.tistory.com/entry/%ED%95%B4%EA%B2%B0%EB%B2%95-%ED%8F%AC%ED%95%A8-The-iOS-Simulator-deployment-target-IPHONESDEVELOPMENTTARGET-is-set-to-80but-the-range-of-suppoted-deployment-target-vesions-is-90-to-14499

##### EB에 HTTPS 설정하기
##### https://velog.io/@yyong3519/EB%EC%97%90-HTTPS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

##### JSONObject 생성, JSONObject를 JSONArray에 넣기, JSONArray를 ArrayList에 넣기
##### https://shlee0882.tistory.com/260

##### mvnrepository
##### https://mvnrepository.com/

##### json-java 
##### https://github.com/stleary/JSON-java

##### aws saa 무료 덤프사이트
##### https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-associate-saa-c03/view/

##### aws iam 
##### https://goddaehee.tistory.com/327

##### [AWS] 가장쉽게 VPC 개념잡기
##### https://medium.com/harrythegreat/aws-%EA%B0%80%EC%9E%A5%EC%89%BD%EA%B2%8C-vpc-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0-71eef95a7098

##### [AWS] EC2 전용 인스턴스(Dedicated Instance)와 전용 호스트(Dedicated Host) 옵션의 비교
##### https://m.blog.naver.com/PostView.naver?blogId=techtrip&logNo=222638353175&categoryNo=67&proxyReferer=

##### AWS EC2 개념 정리
##### https://velog.io/@server30sopt/AWS-EC2-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC

##### [AWS-실습] - EC2 생성
##### https://choideu.tistory.com/480?category=951822

##### Android 개인정보 처리방침 만들기
##### https://soir1984.tistory.com/3#google_vignette

##### websitepolicies
##### https://app.websitepolicies.com/users/login?r=policies%2Fwizard%2Fprivacy-policy%2Ffdp2nao3

##### 앱 배포 스크린샷 
##### www.figma.com

##### 도커에 젠킨스 세팅
##### docker run -itd --name jenkins -p 8085:8080 jenkins/jenkins

    Docker로 설치한 Jenkins의 초기 관리자 비밀번호를 찾으려면 Docker 컨테이너의 로그에서 해당 정보를 가져올 수 있습니다. 이를 위해 다음 단계를 따르세요:
    
    컨테이너의 로그 확인: Jenkins 컨테이너의 로그를 확인하려면, 먼저 컨테이너의 이름이나 ID를 알아야 합니다. 이는 docker ps 명령어를 통해 확인할 수 있습니다. 그 후, docker logs [컨테이너 이름 또는 ID] 명령어를 사용하여 로그를 확인합니다. 초기 관리자 비밀번호는 로그의 어딘가에 기록되어 있을 것입니다.

