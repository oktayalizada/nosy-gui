export class EmailTemplate {

  id: string;
  name: string;
  fromAddress: string;
  subject: string;
  fromProvider: string;
  to: [string];
  cc: [string];
  text: string;
  retryTimes: number;
  retryPeriod: number;
  priority: number;

  constructor(
    emailFromProvider: string,
    emailTemplateName: string,
    emailTemplateTo: [string],
    fromAddress: string,
    priority: number,
    retryPeriod: number,
    retryTimes: number,
    subject: string,
    text: string
  ) {
    this.fromProvider = emailFromProvider;
    this.name = emailTemplateName;
    this.to = emailTemplateTo;
    this.fromAddress = fromAddress;
    this.priority = priority;
    this.retryPeriod = retryPeriod;
    this.retryTimes = retryTimes;
    this.subject = subject;
    this.text = text;
  }

  setEmailCc(cc) {
    this.cc = cc;
  }

}
