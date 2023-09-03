pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'mycypress'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'pnpm install --frozen-lockfile'
        sh 'pnpm cypress install'
      }
    }

    stage('Start Preview server') {
      steps {
        sh 'pnpm build'
        sh 'nohup pnpm preview &'
        sleep(10)
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'pnpm cypress run -b firefox'
      }
    }

    stage('Build') {
      steps {
        sh 'pnpm build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'rm -r /wt/*'
        sh 'cp -r dist/* /wt'
      }
    }

  }
  post {
    always {
      echo 'Stopping local server'
      sh 'pkill -f vite'
    }

  }
}
