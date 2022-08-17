node {


  stage("checkout") {
    checkout([$class: 'GitSCM', branches: [[name: '*/develop']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hsdahmane/ecom-success']]])
  }

  node("vm-int") {
    stage("build") {
      sh "ls"
    }

    stage("build docker image & push") {

    }

    stage("deploy") {

    }
  }


}
