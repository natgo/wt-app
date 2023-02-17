pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:18.12.1'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install -g pnpm'
        sh 'pnpm install --frozen-lockfile'
      }
    }

    stage('Start Dev server') {
      steps {
        sh 'nohup pnpm dev &'
        sleep(10)
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'pnpm cypress run'
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
