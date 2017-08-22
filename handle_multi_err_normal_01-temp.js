function async(request, callback) {
    asyncA(request, function (err, data) {
        if (err) {
            callback(err);
        } else {
            asyncB(request, function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    asyncC(request, function (err, data) {
                        if (err) {
                            callback(err);
                        } else {
                            asyncD(request, function (err, data) {
                                if (err) {
                                    callback(err);
                                } else {
					asyncE(request, function (err, data) {
						if (err) {
							callback(err);
						} else {
							asyncF(request, function (err, data) {
								if (err) {
									callback(err);
								} else {
									asyncG(request, function (err, data) {
										if (err) {
											callback(err);
										} else {
											asyncH(request, function (err, data) {
												if (err) {
													callback(err);
												} else {
													asyncI(request, function (err, data) {
														if (err) {
															callback(err);
														} else {
															asyncDJrequest, function (err, data) {
																if (err) {
																	callback(err);
																} else {
																	callback(null, data);
																}
															});
														}
													});
												}
											});
										}
									});
								}
							});
						}
					});
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
