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
    "slug": "awsSaaSumApp",
    "version": "1.0.2", //수정필수!!!
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.hotong.awsSaaSumApp", //수정필수!!!
      "buildNumber": "1.0.2" //수정필수!!!
    },
    "android": {
      "package": "com.hotong.awsSaaSumApp", //수정필수!!!
      "versionCode": 3, //수정필수!!!
      "vsersionName" : "3.0", //수정필수!!!
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "99a7b18a-f6b0-4ba3-8e35-8e3491dc52b5"
      }
    }
  }
}

