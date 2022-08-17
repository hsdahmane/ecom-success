node("vm-int") {


  stage("checkout") {
    checkout([$class: 'GitSCM', branches: [[name: '*/develop']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hsdahmane/ecom-success']]])
  }

  stage("build") {
    sh "ng build --prod"
  }

  stage("build docker image & push") {

  }

  stage("deploy") {

  }
}
