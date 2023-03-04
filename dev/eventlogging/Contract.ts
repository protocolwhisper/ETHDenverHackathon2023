
async fn can_get_contract_id() {
    let (instance, _id) = get_contract_instance().await;
    // Now you have an instance of your contract you can use to test each function
    instance.increment().call().await.unwrap();
    let result = instance.count().call().await.unwrap();
    assert!(result.value > 0); 
}