# Template with Nest.js and React

Nest.js와 React 조합으로 구성된 템플릿입니다.  
이 템플릿을 사용하여 간편하게 Nest.js와 React 조합의 웹을 만들 수 있으며 Windows, Linux, macOS에서 작동합니다.

## 간단하게 시작하기

```sh
git clone https://github.com/LeeKyuHyuk/Template-with-Nest-and-React.git ProjectName
```

`package.json`, `backend/package.json`, `frontend/package.json` 파일의 다음 필드를 생성하려는 프로젝트 정보에 맞게 수정하여 사용하시길 바랍니다.

```json
{
  "name": "프로젝트 이름",
  "version": "프로젝트 버전",
  "description": "프로젝트 설명",
  "author": "제작자 이름 또는 단체",
  "license": "프로젝트의 라이센스",
  "repository": "프로젝트의 저장소 URL",
  "keywords": ["프로젝트 키워드"],
  "bugs": "이슈 등록 페이지 URL",
  "homepage": "해당 프로젝트의 홈페이지 URL"
}
```

아래의 명령어로 필요한 패키지를 설치합니다.

```sh
cd ProjectName
npm install
```

아래 명령어로 개발 모드로 서버를 작동합니다. 코드가 변경되면, 실시간으로 업데이트됩니다.

```sh
npm run dev
```

아래 명령어로 배포 모드로 서버를 작동할 수 있습니다.

```sh
npm run prod
```

## Docker 이미지 빌드

아래의 명령어로 Nest.js와 React 조합의 Docker 이미지를 만들 수 있습니다.  

```sh
npm run build
```

빌드가 완료되면, 아래의 명령어를 사용하여 Docker 이미지를 실행할 수 있습니다.

```sh
npm start
```
