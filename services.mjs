import Entity, { query, runJob } from "entitystorage"

export default async () => {

  if(!query.tag("fix_pre_2_0_14_rels").first){
    runJob("fix_pre_2_0_14_rels")
    new Entity().tag("fix_pre_2_0_14_rels")
  }
  
  return {}
}