node("vm-int") {


  stage("checkout") {
    checkout([$class: 'GitSCM', branches: [[name: '*/develop']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hsdahmane/ecom-success']]])
  }

  stage("build") {
    sh "npm install"
    sh "ng build --c=production"
  }

  stage("build docker image & push") {
    sh "sudo docker build -t ecom-success ."
  }

  stage("deploy") {
    try {
      sh "sudo docker stop ecom-success"
      sh "sudo docker rm ecom-success"
      sh 'sudo docker run --name ecom-success -p 80:80 -d ecom-success'

    } catch (Exception e) {
      sh 'sudo docker run --name ecom-success -p 80:80 -d ecom-success'
    }
  }
}
