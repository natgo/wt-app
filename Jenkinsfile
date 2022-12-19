pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:latest'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start Dev server') {
      steps {
        sh 'nohup npm run dev &'
        sleep(30)
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
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
