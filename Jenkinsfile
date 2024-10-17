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
        sh 'corepack enable'
        sh 'corepack install'
        sh 'pnpm install --frozen-lockfile'
        sh 'pnpm cypress install'
      }
    }

    stage('Build') {
      steps {
        sh 'pnpm build'
      }
    }

    stage('Start Preview server') {
      steps {
        sh 'nohup pnpm preview &'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'pnpm cy:test'
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
