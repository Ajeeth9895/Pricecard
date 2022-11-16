
import React from 'react';
import Card from "./component/Card";

function App() {
  let plans=[
    {
      plan:"FREE",
      planEnabler:true,
      price:"0",
      priceEnable:true,
      user:"Single User",
      userEnabler:true,
      storage:"5GB",
      storageEnabler:true,
      publicProject:"Unlimited public project",
      publicProjectEnabler:true,
      communityAccess:"Unlimited Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited private project",
      privateProjectEnabler:false,
      phoneSupport:"Dedicated phone support",
      phoneSupportEnabler:false,
      subDomain:"Free sub Domain",
      subDomainEnabler:false,
      report:"monthly status report",
      reportEnabler:false
    },
    {
      plan:"PLUS",
      planEnabler:true,
      price:"9",
      priceEnable:true,
      user:"5 User",
      userEnabler:true,
      storage:"5GB",
      storageEnabler:true,
      publicProject:"Unlimited public project",
      publicProjectEnabler:true,
      communityAccess:"Unlimited Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited private project",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated phone support",
      phoneSupportEnabler:true,
      subDomain:"Free sub Domain",
      subDomainEnabler:true,
      report:"monthly status report",
      reportEnabler:false

    },
    {
      plan:"PRO",
      planEnabler:true,
      price:"49",
      priceEnable:true,
      user:"Unlimited User",
      userEnabler:true,
      storage:"150GB",
      storageEnabler:true,
      publicProject:"Unlimited public project",
      publicProjectEnabler:true,
      communityAccess:"Unlimited Access",
      communityAccessEnabler:true,
      privateProject:"Unlimited private project",
      privateProjectEnabler:true,
      phoneSupport:"Dedicated phone support",
      phoneSupportEnabler:true,
      subDomain:"Free subDomain",
      subDomainEnabler:true,
      report:"monthly status report",
      reportEnabler:true

    }
  ]

  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <Card data={plans[0]}/>
      <Card data={plans[1]}/>
      <Card data={plans[2]}/>
      */}

      {
        plans.map((e,i)=><Card data={e} />)
      }
    </div>
  </div>
</section>
</>
}
export default App;
